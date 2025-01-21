import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo10Component } from './lib85-demo10.component';

describe('Lib85Demo10Component', () => {
  let component: Lib85Demo10Component;
  let fixture: ComponentFixture<Lib85Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
