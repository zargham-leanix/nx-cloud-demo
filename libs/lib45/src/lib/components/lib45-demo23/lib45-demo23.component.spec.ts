import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo23Component } from './lib45-demo23.component';

describe('Lib45Demo23Component', () => {
  let component: Lib45Demo23Component;
  let fixture: ComponentFixture<Lib45Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
