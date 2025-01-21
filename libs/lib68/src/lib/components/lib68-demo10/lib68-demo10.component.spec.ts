import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo10Component } from './lib68-demo10.component';

describe('Lib68Demo10Component', () => {
  let component: Lib68Demo10Component;
  let fixture: ComponentFixture<Lib68Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
