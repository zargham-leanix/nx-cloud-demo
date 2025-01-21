import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo8Component } from './lib51-demo8.component';

describe('Lib51Demo8Component', () => {
  let component: Lib51Demo8Component;
  let fixture: ComponentFixture<Lib51Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
