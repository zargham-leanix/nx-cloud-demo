import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo39Component } from './lib51-demo39.component';

describe('Lib51Demo39Component', () => {
  let component: Lib51Demo39Component;
  let fixture: ComponentFixture<Lib51Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
