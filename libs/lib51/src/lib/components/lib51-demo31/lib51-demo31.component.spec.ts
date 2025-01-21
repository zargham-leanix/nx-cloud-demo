import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo31Component } from './lib51-demo31.component';

describe('Lib51Demo31Component', () => {
  let component: Lib51Demo31Component;
  let fixture: ComponentFixture<Lib51Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
