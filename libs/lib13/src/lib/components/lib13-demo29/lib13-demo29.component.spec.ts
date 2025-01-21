import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo29Component } from './lib13-demo29.component';

describe('Lib13Demo29Component', () => {
  let component: Lib13Demo29Component;
  let fixture: ComponentFixture<Lib13Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
