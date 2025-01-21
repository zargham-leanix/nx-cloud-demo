import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo8Component } from './lib27-demo8.component';

describe('Lib27Demo8Component', () => {
  let component: Lib27Demo8Component;
  let fixture: ComponentFixture<Lib27Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
