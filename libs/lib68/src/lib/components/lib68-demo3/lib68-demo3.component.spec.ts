import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo3Component } from './lib68-demo3.component';

describe('Lib68Demo3Component', () => {
  let component: Lib68Demo3Component;
  let fixture: ComponentFixture<Lib68Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
