import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo23Component } from './lib72-demo23.component';

describe('Lib72Demo23Component', () => {
  let component: Lib72Demo23Component;
  let fixture: ComponentFixture<Lib72Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
