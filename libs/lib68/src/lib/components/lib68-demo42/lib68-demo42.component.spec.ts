import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo42Component } from './lib68-demo42.component';

describe('Lib68Demo42Component', () => {
  let component: Lib68Demo42Component;
  let fixture: ComponentFixture<Lib68Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
