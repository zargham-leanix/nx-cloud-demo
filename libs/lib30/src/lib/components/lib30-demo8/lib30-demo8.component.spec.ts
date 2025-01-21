import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo8Component } from './lib30-demo8.component';

describe('Lib30Demo8Component', () => {
  let component: Lib30Demo8Component;
  let fixture: ComponentFixture<Lib30Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
