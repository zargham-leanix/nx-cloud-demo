import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo23Component } from './lib54-demo23.component';

describe('Lib54Demo23Component', () => {
  let component: Lib54Demo23Component;
  let fixture: ComponentFixture<Lib54Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
