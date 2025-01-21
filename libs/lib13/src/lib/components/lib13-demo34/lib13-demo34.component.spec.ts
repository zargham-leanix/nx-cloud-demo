import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo34Component } from './lib13-demo34.component';

describe('Lib13Demo34Component', () => {
  let component: Lib13Demo34Component;
  let fixture: ComponentFixture<Lib13Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
