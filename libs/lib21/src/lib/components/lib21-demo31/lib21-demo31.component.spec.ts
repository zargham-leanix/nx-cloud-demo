import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo31Component } from './lib21-demo31.component';

describe('Lib21Demo31Component', () => {
  let component: Lib21Demo31Component;
  let fixture: ComponentFixture<Lib21Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
