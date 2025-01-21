import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo26Component } from './lib51-demo26.component';

describe('Lib51Demo26Component', () => {
  let component: Lib51Demo26Component;
  let fixture: ComponentFixture<Lib51Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
