import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo8Component } from './lib85-demo8.component';

describe('Lib85Demo8Component', () => {
  let component: Lib85Demo8Component;
  let fixture: ComponentFixture<Lib85Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
