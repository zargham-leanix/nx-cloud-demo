import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo29Component } from './lib68-demo29.component';

describe('Lib68Demo29Component', () => {
  let component: Lib68Demo29Component;
  let fixture: ComponentFixture<Lib68Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
