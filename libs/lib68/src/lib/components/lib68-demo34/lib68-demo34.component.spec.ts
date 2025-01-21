import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo34Component } from './lib68-demo34.component';

describe('Lib68Demo34Component', () => {
  let component: Lib68Demo34Component;
  let fixture: ComponentFixture<Lib68Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
