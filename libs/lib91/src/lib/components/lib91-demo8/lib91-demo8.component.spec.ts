import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo8Component } from './lib91-demo8.component';

describe('Lib91Demo8Component', () => {
  let component: Lib91Demo8Component;
  let fixture: ComponentFixture<Lib91Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
