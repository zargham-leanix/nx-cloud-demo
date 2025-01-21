import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo4Component } from './lib68-demo4.component';

describe('Lib68Demo4Component', () => {
  let component: Lib68Demo4Component;
  let fixture: ComponentFixture<Lib68Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
