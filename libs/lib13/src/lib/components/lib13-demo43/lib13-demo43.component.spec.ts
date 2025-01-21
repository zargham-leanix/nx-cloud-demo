import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo43Component } from './lib13-demo43.component';

describe('Lib13Demo43Component', () => {
  let component: Lib13Demo43Component;
  let fixture: ComponentFixture<Lib13Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
