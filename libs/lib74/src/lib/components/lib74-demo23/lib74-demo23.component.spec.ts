import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo23Component } from './lib74-demo23.component';

describe('Lib74Demo23Component', () => {
  let component: Lib74Demo23Component;
  let fixture: ComponentFixture<Lib74Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
