import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo44Component } from './lib1-demo44.component';

describe('Lib1Demo44Component', () => {
  let component: Lib1Demo44Component;
  let fixture: ComponentFixture<Lib1Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
