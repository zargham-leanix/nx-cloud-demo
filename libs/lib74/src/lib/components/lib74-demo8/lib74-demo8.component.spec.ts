import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo8Component } from './lib74-demo8.component';

describe('Lib74Demo8Component', () => {
  let component: Lib74Demo8Component;
  let fixture: ComponentFixture<Lib74Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
