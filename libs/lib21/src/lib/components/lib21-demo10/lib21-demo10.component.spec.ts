import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo10Component } from './lib21-demo10.component';

describe('Lib21Demo10Component', () => {
  let component: Lib21Demo10Component;
  let fixture: ComponentFixture<Lib21Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
