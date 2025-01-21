import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo12Component } from './lib51-demo12.component';

describe('Lib51Demo12Component', () => {
  let component: Lib51Demo12Component;
  let fixture: ComponentFixture<Lib51Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
