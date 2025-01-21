import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo43Component } from './lib68-demo43.component';

describe('Lib68Demo43Component', () => {
  let component: Lib68Demo43Component;
  let fixture: ComponentFixture<Lib68Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
