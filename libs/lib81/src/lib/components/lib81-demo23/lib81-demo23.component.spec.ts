import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo23Component } from './lib81-demo23.component';

describe('Lib81Demo23Component', () => {
  let component: Lib81Demo23Component;
  let fixture: ComponentFixture<Lib81Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
