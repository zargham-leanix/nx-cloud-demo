import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo10Component } from './lib81-demo10.component';

describe('Lib81Demo10Component', () => {
  let component: Lib81Demo10Component;
  let fixture: ComponentFixture<Lib81Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
