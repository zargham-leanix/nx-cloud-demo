import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo41Component } from './lib68-demo41.component';

describe('Lib68Demo41Component', () => {
  let component: Lib68Demo41Component;
  let fixture: ComponentFixture<Lib68Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
