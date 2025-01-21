import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo14Component } from './lib1-demo14.component';

describe('Lib1Demo14Component', () => {
  let component: Lib1Demo14Component;
  let fixture: ComponentFixture<Lib1Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
