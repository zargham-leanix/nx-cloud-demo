import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo13Component } from './lib68-demo13.component';

describe('Lib68Demo13Component', () => {
  let component: Lib68Demo13Component;
  let fixture: ComponentFixture<Lib68Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
