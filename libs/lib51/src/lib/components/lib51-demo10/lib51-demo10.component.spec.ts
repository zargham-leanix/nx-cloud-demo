import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo10Component } from './lib51-demo10.component';

describe('Lib51Demo10Component', () => {
  let component: Lib51Demo10Component;
  let fixture: ComponentFixture<Lib51Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
