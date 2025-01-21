import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo39Component } from './lib68-demo39.component';

describe('Lib68Demo39Component', () => {
  let component: Lib68Demo39Component;
  let fixture: ComponentFixture<Lib68Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
