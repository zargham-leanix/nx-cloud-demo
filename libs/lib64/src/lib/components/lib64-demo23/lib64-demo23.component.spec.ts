import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo23Component } from './lib64-demo23.component';

describe('Lib64Demo23Component', () => {
  let component: Lib64Demo23Component;
  let fixture: ComponentFixture<Lib64Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
