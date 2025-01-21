import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo19Component } from './lib79-demo19.component';

describe('Lib79Demo19Component', () => {
  let component: Lib79Demo19Component;
  let fixture: ComponentFixture<Lib79Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
