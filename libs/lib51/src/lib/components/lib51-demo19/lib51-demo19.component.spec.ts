import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo19Component } from './lib51-demo19.component';

describe('Lib51Demo19Component', () => {
  let component: Lib51Demo19Component;
  let fixture: ComponentFixture<Lib51Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
