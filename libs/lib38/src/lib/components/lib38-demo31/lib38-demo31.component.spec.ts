import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo31Component } from './lib38-demo31.component';

describe('Lib38Demo31Component', () => {
  let component: Lib38Demo31Component;
  let fixture: ComponentFixture<Lib38Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
