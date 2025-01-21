import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo31Component } from './lib68-demo31.component';

describe('Lib68Demo31Component', () => {
  let component: Lib68Demo31Component;
  let fixture: ComponentFixture<Lib68Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
