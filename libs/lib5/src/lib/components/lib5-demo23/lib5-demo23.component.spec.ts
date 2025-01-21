import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo23Component } from './lib5-demo23.component';

describe('Lib5Demo23Component', () => {
  let component: Lib5Demo23Component;
  let fixture: ComponentFixture<Lib5Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
