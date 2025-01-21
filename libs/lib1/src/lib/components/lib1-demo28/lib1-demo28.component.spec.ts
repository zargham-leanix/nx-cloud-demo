import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1Demo28Component } from './lib1-demo28.component';

describe('Lib1Demo28Component', () => {
  let component: Lib1Demo28Component;
  let fixture: ComponentFixture<Lib1Demo28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib1Demo28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1Demo28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
