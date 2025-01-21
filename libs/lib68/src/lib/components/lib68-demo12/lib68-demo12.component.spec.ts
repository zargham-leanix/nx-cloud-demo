import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo12Component } from './lib68-demo12.component';

describe('Lib68Demo12Component', () => {
  let component: Lib68Demo12Component;
  let fixture: ComponentFixture<Lib68Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
