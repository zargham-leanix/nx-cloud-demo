import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo23Component } from './lib27-demo23.component';

describe('Lib27Demo23Component', () => {
  let component: Lib27Demo23Component;
  let fixture: ComponentFixture<Lib27Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
