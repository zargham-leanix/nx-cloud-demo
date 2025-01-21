import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo43Component } from './lib85-demo43.component';

describe('Lib85Demo43Component', () => {
  let component: Lib85Demo43Component;
  let fixture: ComponentFixture<Lib85Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
