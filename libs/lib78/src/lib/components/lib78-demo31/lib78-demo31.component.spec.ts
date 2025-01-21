import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo31Component } from './lib78-demo31.component';

describe('Lib78Demo31Component', () => {
  let component: Lib78Demo31Component;
  let fixture: ComponentFixture<Lib78Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
