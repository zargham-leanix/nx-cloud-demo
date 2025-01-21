import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo8Component } from './lib63-demo8.component';

describe('Lib63Demo8Component', () => {
  let component: Lib63Demo8Component;
  let fixture: ComponentFixture<Lib63Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
