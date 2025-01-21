import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo43Component } from './lib30-demo43.component';

describe('Lib30Demo43Component', () => {
  let component: Lib30Demo43Component;
  let fixture: ComponentFixture<Lib30Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
