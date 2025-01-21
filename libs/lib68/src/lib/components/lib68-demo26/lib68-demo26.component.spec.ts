import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo26Component } from './lib68-demo26.component';

describe('Lib68Demo26Component', () => {
  let component: Lib68Demo26Component;
  let fixture: ComponentFixture<Lib68Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
