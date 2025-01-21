import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo31Component } from './lib79-demo31.component';

describe('Lib79Demo31Component', () => {
  let component: Lib79Demo31Component;
  let fixture: ComponentFixture<Lib79Demo31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
