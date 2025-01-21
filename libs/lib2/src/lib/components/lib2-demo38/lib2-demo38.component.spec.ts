import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo38Component } from './lib2-demo38.component';

describe('Lib2Demo38Component', () => {
  let component: Lib2Demo38Component;
  let fixture: ComponentFixture<Lib2Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
