import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo23Component } from './lib68-demo23.component';

describe('Lib68Demo23Component', () => {
  let component: Lib68Demo23Component;
  let fixture: ComponentFixture<Lib68Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
