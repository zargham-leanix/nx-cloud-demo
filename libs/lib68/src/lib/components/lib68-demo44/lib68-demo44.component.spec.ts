import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo44Component } from './lib68-demo44.component';

describe('Lib68Demo44Component', () => {
  let component: Lib68Demo44Component;
  let fixture: ComponentFixture<Lib68Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
