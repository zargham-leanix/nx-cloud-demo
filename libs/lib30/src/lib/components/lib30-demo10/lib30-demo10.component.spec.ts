import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo10Component } from './lib30-demo10.component';

describe('Lib30Demo10Component', () => {
  let component: Lib30Demo10Component;
  let fixture: ComponentFixture<Lib30Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
